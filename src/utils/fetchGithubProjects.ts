const fetchGithubProjects = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=updated`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.filter((repo: any) => !repo.fork && !repo.private);
};

export default fetchGithubProjects; 