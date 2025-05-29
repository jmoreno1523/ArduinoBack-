// logs.js
export default function handler(req, res) {
  console.log('Request to /api/logs', req.method);
  if (req.method === 'GET') {
    res.status(200).json(global.logs || []);
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}


