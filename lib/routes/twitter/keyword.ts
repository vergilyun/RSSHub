import { Route, ViewType } from '@/types';
import api from './api';
import utils from './utils';

export const route: Route = {
    path: '/keyword/:keyword/:routeParams?',
    categories: ['social-media'],
    view: ViewType.SocialMedia,
    example: '/twitter/keyword/RSSHub',
    parameters: { keyword: 'keyword', routeParams: 'extra parameters, see the table above' },
    features: {
        requireConfig: [
            {
                name: 'omniyun',
                description: 'Please see above for details.',
            },
            {
                name: 'qpmzg_13579',
                description: 'Please see above for details.',
            },
            {
                name: 'TWITTER_AUTH_TOKEN',
                description: 'Please see above for details.',
            },
            {
                name: 'AAAAAAAAAAAAAAAAAAAAAEsi2gEAAAAAoGdCWpplMLgZIpAZwM2KkMgeKd8%3DNLjfxw6DEkGdd8qrAYMs61BIiC3mz69AgOSkEM06gWlfzt1HbJ',
                description: 'Please see above for details.',
            },
        ],
        requirePuppeteer: false,
        antiCrawler: false,
        supportBT: false,
        supportPodcast: false,
        supportScihub: false,
    },
    name: 'Keyword',
    maintainers: ['DIYgod', 'yindaheng98', 'Rongronggg9', 'pseudoyu'],
    handler,
    radar: [
        {
            source: ['x.com/search'],
        },
    ],
};

async function handler(ctx) {
    const keyword = ctx.req.param('keyword');
    await api.init();
    const data = await api.getSearch(keyword);

    return {
        title: `Twitter Keyword - ${keyword}`,
        link: `https://x.com/search?q=${encodeURIComponent(keyword)}`,
        item: utils.ProcessFeed(ctx, {
            data,
        }),
        allowEmpty: true,
    };
}
