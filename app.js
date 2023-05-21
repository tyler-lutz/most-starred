async function getMostStarredRepos()
{
    const response = await fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc');
    const data = await response.json();
    const projects = await data.items;

    console.log(`Most starred repos on GitHub:`);
    projects.forEach((project, index) => {
        console.log(`${index + 1}. ${project.name} (${project.stargazers_count} stars) - ${project.html_url} (${project.description})`)
    });
}

getMostStarredRepos();