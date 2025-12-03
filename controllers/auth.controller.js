import { supabase } from '../config/supabase.js';

export const authController = {
    register: async(req, res) => {
        try {
            const {email, password} = req.body;

            const {data, error} = await supabase.auth.signUp({
                email,
                password
            });
            if (error) throw new Error(error.message);

            res.json({
                ok: true,
                message: 'User registered successfully',
                data
            });
        } catch (err) {
            res.status(400).json({ok: false, error: err.message});
        }
    },

    login: async(req, res) => {
        try {
            const {email, password} = req.body;

            const {data, error} = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) throw new Error(error.message);

            res.json({
                ok: true,
                message: 'Logged in',
                data
            });
        } catch (err) {
            res.status(400).json({ok: false, error: err.message});
        }
    }
};