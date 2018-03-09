/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.onyx.Message');
goog.provide('proto.onyx.Message.MessageMode');
goog.provide('proto.onyx.Posrep');
goog.provide('proto.onyx.Posrep.PosMode');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onyx.Posrep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onyx.Posrep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.onyx.Posrep.displayName = 'proto.onyx.Posrep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onyx.Posrep.prototype.toObject = function(opt_includeInstance) {
  return proto.onyx.Posrep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onyx.Posrep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onyx.Posrep.toObject = function(includeInstance, msg) {
  var f, obj = {
    imei: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datetime: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    latitude: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    longitude: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    altinmeters: jspb.Message.getFieldWithDefault(msg, 5, 0),
    speedinmps: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onyx.Posrep}
 */
proto.onyx.Posrep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onyx.Posrep;
  return proto.onyx.Posrep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onyx.Posrep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onyx.Posrep}
 */
proto.onyx.Posrep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImei(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAltinmeters(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpeedinmps(value);
      break;
    case 7:
      var value = /** @type {!proto.onyx.Posrep.PosMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onyx.Posrep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onyx.Posrep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onyx.Posrep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onyx.Posrep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImei();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatetime();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAltinmeters();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getSpeedinmps();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.onyx.Posrep.PosMode = {
  TRACK_START: 0,
  SPEEDUP: 1,
  SPEEDDOWN: 2,
  TRACK_END: 3
};

/**
 * optional string imei = 1;
 * @return {string}
 */
proto.onyx.Posrep.prototype.getImei = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.onyx.Posrep.prototype.setImei = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double dateTime = 2;
 * @return {number}
 */
proto.onyx.Posrep.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.onyx.Posrep.prototype.setDatetime = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float latitude = 3;
 * @return {number}
 */
proto.onyx.Posrep.prototype.getLatitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.onyx.Posrep.prototype.setLatitude = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float longitude = 4;
 * @return {number}
 */
proto.onyx.Posrep.prototype.getLongitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.onyx.Posrep.prototype.setLongitude = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint32 altInMeters = 5;
 * @return {number}
 */
proto.onyx.Posrep.prototype.getAltinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.onyx.Posrep.prototype.setAltinmeters = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 speedInMps = 6;
 * @return {number}
 */
proto.onyx.Posrep.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.onyx.Posrep.prototype.setSpeedinmps = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional PosMode mode = 7;
 * @return {!proto.onyx.Posrep.PosMode}
 */
proto.onyx.Posrep.prototype.getMode = function() {
  return /** @type {!proto.onyx.Posrep.PosMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.onyx.Posrep.PosMode} value */
proto.onyx.Posrep.prototype.setMode = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onyx.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onyx.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.onyx.Message.displayName = 'proto.onyx.Message';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onyx.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.onyx.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onyx.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onyx.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    imei: jspb.Message.getFieldWithDefault(msg, 1, ""),
    datetime: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    latitude: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    longitude: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    altinmeters: jspb.Message.getFieldWithDefault(msg, 5, 0),
    speedinmps: jspb.Message.getFieldWithDefault(msg, 6, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onyx.Message}
 */
proto.onyx.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onyx.Message;
  return proto.onyx.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onyx.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onyx.Message}
 */
proto.onyx.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImei(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAltinmeters(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpeedinmps(value);
      break;
    case 7:
      var value = /** @type {!proto.onyx.Message.MessageMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onyx.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onyx.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onyx.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onyx.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImei();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatetime();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getAltinmeters();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getSpeedinmps();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.onyx.Message.MessageMode = {
  DISTRESS: 0,
  SYSTEM: 1,
  AIR_GROUND: 2,
  AIR_AIR: 3,
  GROUND_AIR: 4,
  GROUND_GROUND: 5
};

/**
 * optional string imei = 1;
 * @return {string}
 */
proto.onyx.Message.prototype.getImei = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.onyx.Message.prototype.setImei = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double dateTime = 2;
 * @return {number}
 */
proto.onyx.Message.prototype.getDatetime = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.onyx.Message.prototype.setDatetime = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float latitude = 3;
 * @return {number}
 */
proto.onyx.Message.prototype.getLatitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.onyx.Message.prototype.setLatitude = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float longitude = 4;
 * @return {number}
 */
proto.onyx.Message.prototype.getLongitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.onyx.Message.prototype.setLongitude = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint32 altInMeters = 5;
 * @return {number}
 */
proto.onyx.Message.prototype.getAltinmeters = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.onyx.Message.prototype.setAltinmeters = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 speedInMps = 6;
 * @return {number}
 */
proto.onyx.Message.prototype.getSpeedinmps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.onyx.Message.prototype.setSpeedinmps = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional MessageMode mode = 7;
 * @return {!proto.onyx.Message.MessageMode}
 */
proto.onyx.Message.prototype.getMode = function() {
  return /** @type {!proto.onyx.Message.MessageMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.onyx.Message.MessageMode} value */
proto.onyx.Message.prototype.setMode = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


