import {Query} from '../index';
import type {TRepos} from '../modals';

const all = () => Query<TRepos[]>('SELECT * FROM repos');

export default {
    all
}