export default function LLink(id, type, origin_id, origin_slot, target_id, target_slot) {
    this.id = id;
    this.type = type;
    this.origin_id = origin_id;
    this.origin_slot = origin_slot;
    this.target_id = target_id;
    this.target_slot = target_slot;

    this._data = null;
    this._pos = new Float32Array(2); //center
}

LLink.prototype.configure = function(o) {
    if (o.constructor === Array) {
        this.id = o[0];
        this.origin_id = o[1];
        this.origin_slot = o[2];
        this.target_id = o[3];
        this.target_slot = o[4];
        this.type = o[5];
    } else {
        this.id = o.id;
        this.type = o.type;
        this.origin_id = o.origin_id;
        this.origin_slot = o.origin_slot;
        this.target_id = o.target_id;
        this.target_slot = o.target_slot;
    }
};

LLink.prototype.serialize = function() {
    return [
        this.id,
        this.origin_id,
        this.origin_slot,
        this.target_id,
        this.target_slot,
        this.type
    ];
};
