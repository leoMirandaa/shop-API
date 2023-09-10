import { Request, Response } from "express";
import { handleHttpError } from "../utils/error.handle";
import couponsServices from "../services/coupons";

const getCoupons = async (req: Request, res: Response) => {
  try {
    const coupons = await couponsServices.getCoupons();
    res.status(200).json(coupons);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_COUPONS", error);
  }
};

const getCoupon = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const coupon = await couponsServices.getCoupon(id);
    res.status(200).json(coupon);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_COUPON", error);
  }
};

const createCoupon = async ({ body }: Request, res: Response) => {
  console.log("BODY: ", body);
  try {
    const coupon = await couponsServices.createCoupon(body);

    if (coupon === "COUPON_ALREADY_EXISTS") {
      return res.status(400).json({ msg: "COUPON_ALREADY_EXISTS" });
    }

    res.status(201).json(coupon);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_COUPON", error);
  }
};

const updateCoupon = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const coupon = await couponsServices.updateCoupon(id, body);
    res.status(200).json(coupon);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_COUPON", error);
  }
};

const deleteCoupon = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const coupon = await couponsServices.deleteCoupon(id);
    res.status(200).json(coupon);
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_COUPON", error);
  }
};

export { getCoupons, getCoupon, createCoupon, updateCoupon, deleteCoupon };
