const hasGoodVision = false;
const hasDrivingLicense = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah can drive");
} else {
  console.log("Sarah can't drive");
}
