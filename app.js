const axios = require('axios');

async function getMostStarredRepos()
{
    try {
        const reponse = await axios.get('https://api.github.com/search/repositories', {
            params: {
                q: 'stars:>1',
                sort: 'stars',
                order: 'desc'
            }
        });

        const data = reponse.data;
        const projects = data.items;

        console.log('Most starred repos on GitHub:');
        projects.forEach((project, index) => {
            console.log(`${index + 1}. ${project.name} (${project.stargazers_count} stars) - ${project.html_url} (${project.description})`)
        });
    } catch (err) {
        console.error('Error while getting most starred repos:', err.message);
    }
}

getMostStarredRepos();