function scale_to_screen(THREE, mesh) {
	const box3 = new THREE.Box3().setFromObject(mesh);

	const size = new THREE.Vector3()
	box3.getSize(size)
	let maxScale = Math.max(box3.max.x - box3.min.x, box3.max.y - box3.min.y, box3.max.z - box3.min.z);
	mesh.scale.setScalar(1 / maxScale);
}

// *--------|--------*
// |        v        |
// *--------|----u---*
// |        |        |
// *--------|--------*
function getVaxis(THREE, camera) {
	let forward = new THREE.Vector3(), u = new THREE.Vector3(), v = new THREE.Vector3();
	camera.getWorldDirection(forward);
	forward.normalize();

	let n_forward = forward.clone().negate();
	u.crossVectors(n_forward, camera.up.normalize());
	v.crossVectors(forward, u);
	return v;
}