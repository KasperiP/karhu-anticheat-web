import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema(
    {
        license: {
            type: String,
            required: true,
        },
        discord_id: {
            type: String,
        },
        discord_username: {
            type: String,
        },
        discord_discriminator: {
            type: String,
        },
        discord_avatar: {
            type: String,
        },
        email: {
            type: String,
            lowercase: true,
        },
        ip_list: {
            type: [String],
            default: [],
        },
        hwid_list: {
            type: [String],
            default: [],
        },
        expiresAt: {
            type: Date,
            default: null,
        },
        activated: {
            default: false,
            type: Boolean,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Customers ||
    mongoose.model('Customers', customerSchema)
