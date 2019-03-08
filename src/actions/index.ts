import { ADD_ARTICLE } from '../constants/actionTypes';
import { IAddArticle, IAddArticlePayload } from './index';

export interface IAddArticle {
  type: string;
  payload: IAddArticlePayload;
}

export interface IAddArticlePayload {
  title: string;
  id: number;
}

export type ArticleAction = IAddArticle;

export const addArtilce: (payload: IAddArticlePayload) => ArticleAction = payload => {
  return { type: ADD_ARTICLE, payload };
};
