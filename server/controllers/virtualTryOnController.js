import Replicate from "replicate"
import User from "../models/userModel.js"

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
})

export const virtualTryOn = async (req, res) => {
    // try {
    //     const { person_url, cloth_url, garment_des } = req.body
    //     if (!person_url || !cloth_url || !garment_des) {
    //         res.status(409)
    //         throw new Error("Please Fill all details")
    //     }
        let user = await User.findById(req.user._id)
        if (user.credits <= 0 || !user.credits) {
            res.status(409)
            throw new Error("Not Enough Credits");

        } else {
            // const input = {
            //     garm_img: cloth_url,
            //     human_img: person_url,
            //     garment_des: garment_des
            // }

            // const output = await replicate.run({ input })

            await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 }, { new: true })
            console.log(user.credits)
            // res.json({
            //     sucsess: true,
            //     output_url: output.url()
            // })
        }
        
    // } catch (error) {
    //     res.status(409)
    //     throw new Error("Currently Virtual Try is Not Available");

    // }
    res.send("hello try dress")
}