import Listing from "../models/listingModel.js";

export const createListing = async (req, res, next) => {
  try {
    const lsting = await Listing.create(req.body);
    return res.status(201).json(lsting);
  } catch (error) {
    next(error);
  }
};
