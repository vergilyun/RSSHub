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
                name: '87682c7fbbabc695b0a8c0d1e94c21f2e810b716',
                description: 'Please see above for details.',
            },
            {
                name: '78a26654b8c4a638209476bc618ea3034cc357a4335190eacfd8f0c79be5ee9dd061078bd7ad78d862c018dc1992624dd22285981ae720e08be914895e3d76f3db6106638505187f2e7614671fa16e12',
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
