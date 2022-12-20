export default function guardrail(mathFunction) {
  const queue = [];

  try {
    let result = mathFunction();
    queue.push(result, 'Guardrail was processed');
  } catch (err) {
    queue.push(`Error: ${err.message}`, 'Guardrail was processed');
  }

  return queue;
}
