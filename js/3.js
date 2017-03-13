function extend(o, p) {
	for (var prop in p) {
		o[prop] = p[prop];
	}
	return o;
}

function merge(o, p) {
	for (var prop in p) {
		if (o.hasOwnProperty(prop)) continue;
		o[prop] = p[prop];
	}
	return o;
}

function restrict(o, p) {
	for (var prop in o) {
		if (!p.hasOwnProperty(prop)) {
			delete (o[prop]);
		}
	}
	return o;
}