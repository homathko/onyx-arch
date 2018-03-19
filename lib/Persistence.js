/**
 * Persistence.js
 *
 * Wrapper for GCP/Datastore
 *
 * @class: Persistence
 *
 */

const Datastore = require('@google-cloud/datastore');

class DS {
    constructor() {
        this._ds = Datastore({
            projectId: 'proto-arch'
        });
    }
    
    static toDatastore (obj, nonIndexed) {
        nonIndexed = nonIndexed || [];
        const results = [];
        Object.keys(obj).forEach((k) => {
            if (obj[k] === undefined) {
                return;
            }
            results.push({
                name: k,
                value: obj[k],
                excludeFromIndexes: nonIndexed.indexOf(k) !== -1
            });
        });
        return results;
    }
    
    DSUpdate (kind, id, data, cb) {
        let key;
        if (id) {
            key = this._ds.key([kind, parseInt(id, 10)]);
        } else {
            key = this._ds.key(kind);
        }
        
        let noIndexArray = [];
        
        switch (kind) {
            case 'MOMRecord':
                noIndexArray = [
                    'cepRadius',
                    'decodedPayload',
                    'latitude',
                    'locationInfoLength',
                    'longitude',
                    'momsn',
                    'mtmsn',
                    'payload'
                ];
                break;
                
            case 'PosRep':
                noIndexArray = [,
                    'MOMRecordId',
                    'mode',
                    'longitude',
                    'latitude',
                    'altitude'
                ];
        }
        
        const entity = {
            key: key,
            data: DS.toDatastore(data, noIndexArray)
        };
        
        this._ds.save(
            entity,
            (err) => {
                data.id = entity.key.id;
                cb(err, err ? null : data);
            }
        );
    }
}


module.exports = DS;