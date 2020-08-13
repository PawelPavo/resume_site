import {Query} from '../index';
import type {TRepos} from '../modals';

const all = () => Query<TRepos[]>('SELECT projects.*, languages.language_name FROM projects JOIN languages ON languages.id=projects.language_id');

export default {
    all
}