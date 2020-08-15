import {Query} from '../index';
import type {TRepos} from '../modals';

const all = () => Query<TRepos[]>('SELECT * FROM repos');
const find = (tag:any) => Query<TRepos[]> (`SELECT * FROM repos WHERE repo_tags LIKE ? `, [`%${tag}%`])

export default {
    all,
    find
}