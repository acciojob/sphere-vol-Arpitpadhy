function volume_sphere() {
    //Write your code here
	event.preventDefault();
	const radiusInput = document.getElementById('radius').value;
			const radius = parseFloat(radiusInput);
	 if (isNaN(radius) || radius < 0) {
    document.getElementById('volume').value = 'NaN';
    return;
  }

  // Calculate volume: V = (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display
  document.getElementById('volume').value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
