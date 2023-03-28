import { Request, Response } from 'express';
import { scanCookies } from '../scan-cookies';
import { saveCookies, updateCookies } from '../models/cookieModel';

export async function scanCookiesController(req: Request, res: Response) {
  const { url } = req.body;

  try {
    const cookies = await scanCookies(url);
    await saveCookies(cookies);
    res.json({ cookies });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao escanear cookies' });
  }
}

export async function manageCookiesController(req: Request, res: Response) {
  const { updatedCookies } = req.body;

  try {
    await updateCookies(updatedCookies);
    res.json({ message: 'Cookies atualizados com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao gerenciar cookies' });
  }
}