// flecha.js
export default function handler(req, res) {
  console.log('Request to /api/flecha', req.method);
  if (req.method === 'POST') {
    // ... resto del código
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
