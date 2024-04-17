import { prisma } from "../../util/client.js";

export async function createUser(userData) {
  const user = await prisma.User.create({
    data: userData,
  });
  return user;
}

export async function getUser(user_email){
  const user = await prisma.user.findUnique({    
    where:{
          email: user_email
    }
  })
  return user
}
export async function deleteUser(userEmail, userPassword) {
  if (await getUser()) {
    const user = await prisma.User.delete({
      where: {
        email: userEmail,
        password: userPassword,
      },
    });
    return true;
  }
  return false;
}

export async function updateUser(userEmail, userData) {
  if (await getUser()) {
    const user = await prisma.User.update({
      where: {
        email: userEmail,
      },
      data: userData,
    });
    return user;
  }
  return false;
}