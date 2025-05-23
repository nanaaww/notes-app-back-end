function parsePostgresArray(str) {
  if (!str || typeof str !== 'string') return [];

  return str
    .slice(1, -1) // hapus { dan }
    .split(',') // pisah berdasarkan koma
    .map((tag) => tag.replace(/^"|"$/g, '')); // hapus tanda kutip
}

const mapDBToModel = ({
  id, title, body, tags, created_at, updated_at,
}) => ({
  id,
  title,
  body,
  tags: parsePostgresArray(tags),
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
