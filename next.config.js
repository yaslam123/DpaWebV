module.exports = {
    // Other Next.js configurations
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            // Add other pages here if needed
        };
    },
    distDir: 'out', // This should match the output location specified in the workflow
};
