import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import { AuthLoginRequestDTO } from '../dto/authDto';
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    const data: AuthLoginRequestDTO = await req.body;
    // console.log(JSON.stringify(data))
    
    if (!data.Email || !data.Password) {
        return res.status(400).send('Email ou senha faltantes!');
    }

    try {
        const user = await User.findOne({ where: { Email: data.Email }, attributes: {include: ['Password']} });
        if (!user) {
            return res.status(404).send("Usuário não encontrado.");
        }

        const isPasswordValid = await bcrypt.compare(data.Password, user.dataValues.Password);
        
        if (!isPasswordValid) {
            return res.status(401).send("Senha incorreta.");
        }
        next();

        const jwtSecret = process.env.SECRET;
        if (!jwtSecret) {
            return res.status(500).send("Erro ao gerar chave de acesso!")
        }

        const token = jwt.sign({id: user.IDUser, Name:user.Name, Email: user.Email}, jwtSecret, { expiresIn: '730h' });

        return res.status(201).send(token)

    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro durante a autenticação.");
    }
}

//   public forgotPassword = async (req: Request, res: Response) => {
//     try {
//       const result = await this.authService.forgotPassword(req.body);
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(200).json({ response: true });
//     }
//   };

//   public checkCode = async (req: Request, res: Response) => {
//     try {
//       const result = await this.authService.checkCode(req.body);
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   };

//   public resendCode = async (req: Request, res: Response) => {
//     try {
//       const result = await this.authService.resendCode(req.body);
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(200).json({ response: true });
//     }
//   };

//   public resetPassword = async (req: Request, res: Response) => {
//     try {
//       const result = await this.authService.resetPassword(req.body);
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   };

//   public setInitialPassword = async (req: AuthRequest, res: Response) => {
//         try {
//             // O ID do usuário vem do token, que o middleware já validou
//             const userId = req.user?.sub;
//             if (!userId) {
//                 throw new AppError('ID do usuário não encontrado no token.', 401);
//             }

//             const result = await this.authService.setInitialPassword(req.body, userId);
//             res.status(200).json(result);

//         } catch (error) {
//             if (error instanceof AppError) {
//                 res.json({ message: error.message });
//             }
//             console.error("ERRO INESPERADO AO DEFINIR SENHA INICIAL:", error); 
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     };

//   public deleteUser = async(req: Request, res: Response) => {
    
//     try {
//       const result = await this.authService.login(req.body);
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
// }