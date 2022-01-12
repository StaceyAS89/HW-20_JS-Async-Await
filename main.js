function delay(data, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })
}
delay({
    name: "user"
  }, 1000)
  .then((data) => console.log("Hello!", data))
  .catch((error) => console.error(error))


function getUserInfo() {
  return {
    name: 'Vic',
    age: 21,
    id: 1
  }
}



function getUserAvatar(userInfo) {
  userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
  return userInfo;
}


function getUserAdditionalInfo(userInfo) {
  userInfo.interests = ['sport', 'books'];
  return userInfo;
}

function delay(data, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })
}


async function getResult() {
  try {
    let userInfo = await getUserInfo();
    let userInfoAvatar = await getUserAvatar(userInfo);
    let userAdditionalInfo = await getUserAdditionalInfo(userInfo)
    await delay(userInfo, 1000);
    console.log(userInfo)

  } catch {
    throw new Error('error')
  }

}

getResult();


async function getUser() {
  return {
    name: 'Vic',
    age: 21,
    id: 1
  };
}

async function getInfo() {
  try {
    let user = await getUser();
  } catch {
    throw new Error('error');
  }
}

getInfo();