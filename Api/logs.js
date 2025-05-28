let logs = global.logs || [];
global.logs = logs;

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(logs);
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}


