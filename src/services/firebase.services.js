import firebase from "../firebase/firebase.utils";

export async function doesPhoneNumberExist(phoneNumber) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("phoneNumber", "==", phoneNumber)
    .get();
  console.log(result.docs.length);
  return result.docs.length > 0 ? true : false;
}

export async function getUserDetailsByID(id) {
  console.log(id);
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", id)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }))[0];

  return user;
}

export async function addProfileToAccount(id, name, address, pincode) {
  console.log(id);
  const res = await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update(
      { name: name, address: address, pincode: pincode },
      { merge: true }
    );

  console.log(res);
}

export async function addPackage(id, packageName, packagePrice) {
  await firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({ packageName: packageName, packagePrice: packagePrice });
}

export async function addFlat(
  plan,
  builderName,
  propertyName,
  address,
  roomType,
  price,
  value,
  area,
  parking,
  averagePrice,
  facing,
  flatDescription,
  urls,
  flatFurnishedStatus,
  userId,
  userDocId
) {
  await firebase.firestore().collection("property").add({
    builderName: builderName,
    propertyType: plan,
    propertyName: propertyName,
    address: address,
    roomType: roomType,
    price: price,
    value: value,
    area: area,
    parking: parking,
    averagePrice: averagePrice,
    facing: facing,
    description: flatDescription,
    images: urls,
    furnishedStatus: flatFurnishedStatus,
    userId: userId,
    userDocId: userDocId,
  });
}

export async function addVilla(
  plan,
  villaAddress,
  villaArea,
  villaAveragePrice,
  furnishedStatus,
  possessionStatus,
  villaPrice,
  villaValue,
  villaBedroom,
  villaBathroom,
  villaDescription,
  urls,
  userId,
  userDocId
) {
  await firebase.firestore().collection("property").add({
    propertyType: plan,
    address: villaAddress,
    price: villaPrice,
    value: villaValue,
    area: villaArea,
    averagePrice: villaAveragePrice,
    description: villaDescription,
    images: urls,
    furnishedStatus: furnishedStatus,
    possessionStatus: possessionStatus,
    villaBedroom: villaBedroom,
    villaBathroom: villaBathroom,
    userId: userId,
    userDocId: userDocId,
  });
}

export async function addProject(
  plan,
  projectPropertyName,
  projectAddress,
  listOfBHK,
  projectPossessionStatus,
  projectAveragePrice,
  minCarpetSize,
  maxCarpetSize,
  urls,
  oneRK,
  oneBHK,
  twoBHK,
  threeBHK,
  fourBHK,
  fiveBHK,
  ammenities,
  projectDescription,
  userId,
  userDocId
) {
  await firebase.firestore().collection("property").add({
    propertyType: plan,
    project: projectPropertyName,
    address: projectAddress,
    listOfBHK: listOfBHK,
    possessionStatus: projectPossessionStatus,
    averagePrice: projectAveragePrice,
    minCarpetSize: minCarpetSize,
    maxCarpetSize: maxCarpetSize,
    images: urls,
    oneRK: oneRK,
    oneBHK: oneBHK,
    twoBHK: twoBHK,
    threeBHK: threeBHK,
    fourBHK: fourBHK,
    fiveBHK: fiveBHK,
    description: projectDescription,
    ammenities: ammenities,
    userId: userId,
    userDocId: userDocId,
  });
}
