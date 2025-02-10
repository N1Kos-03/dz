function calculateDistance(positionLat, positionLong, destinationLat, destinationLong) {
    const R = 6371; 
    const dLat = (destinationLat - positionLat) * (Math.PI / 180);
    const dLon = (destinationLong - positionLong) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(positionLat * (Math.PI / 180)) * Math.cos(destinationLat * (Math.PI / 180)) * Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.asin(Math.sqrt(a)));
}

const positionLat = 10;  
const positionLong = 30;  
const destinationLat = 20;  
const destinationLong = 40;  
const distance = calculateDistance(positionLat, positionLong, destinationLat, destinationLong);
console.log(`Расстояние до назначения: ${distance.toFixed(2)} км`);