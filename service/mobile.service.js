import { Mobile } from "../model/Mobile.model.js";

async function displayingData() {
  return await Mobile.findAll();
}

async function postingData(brand, title, url, rating, image, os, ram, price) {
  return await Mobile.create({
    brand,
    title,
    url,
    rating,
    image,
    os,
    ram,
    price,
  });
}

async function findByID(id) {
  return await Mobile.findOne({
    where: {
      id: id,
    },
  });
}

async function updatingMobileDataByID(
  brand,
  title,
  url,
  rating,
  image,
  os,
  ram,
  price,
  id
) {
  return await Mobile.update(
    { brand, title, url, rating, image, os, ram, price },
    {
      where: {
        id: id,
      },
    }
  );
}

async function distoryMobileDataByID(id) {
  return await Mobile.destroy({
    where: {
      id: id,
    },
  });
}

export default {
  displayingData,
  postingData,
  findByID,
  updatingMobileDataByID,
  distoryMobileDataByID,
};
