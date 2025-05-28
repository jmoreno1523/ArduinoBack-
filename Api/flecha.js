let logs = global.logs || [];
global.logs = logs;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { button } = req.body;

    if (!button) {
      return res.status(400).json({ error: 'El campo "button" es obligatorio' });
    }

    const log = {
      button,
      timestamp: new Date().toISOString(),
    };

    logs.unshift(log);
    res.status(201).json({ message: 'Flecha registrada', log });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

