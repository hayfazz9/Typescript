/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPricePerNight: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 11 / 100;
const isVipMember: boolean = true;

const roomSubtotal = roomPricePerNight * nightsStayed;

const discount = isVipMember ? roomSubtotal * 12 / 100 : 0;

const taxableAmount = roomSubtotal - discount;

const tax = taxableAmount * taxRate;

const finalPayment = taxableAmount + tax + serviceCharge;

const freeBreakfast = nightsStayed >= 3 || isVipMember;

console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", freeBreakfast);