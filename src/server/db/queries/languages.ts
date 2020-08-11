import {Query} from '../index';
import type {TLanguages} from '../modals';

const all = () => Query<TLanguages[]>('SELECT * FROM languages');

export default {
    all
}