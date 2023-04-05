import React from 'react';
import { PhotoData } from 'types/unsplashTypes';

import Likes from '../icons/likes/Likes';

import close from '/close.svg';
import locationIcon from '/locations.svg';
import twitterIcon from '/twitter.svg';
import instagramIcon from '/instagram.svg';
import './photoCardModal.scss';

interface IProps {
  photo: PhotoData;
  closeModal?: (e: React.MouseEvent) => void;
}

const PhotoCardModal = ({ photo, closeModal }: IProps) => {
  const { user, urls, color, alt, likes } = photo;
  const { avatar, name, bio, location, instagram, twitter } = user;

  return (
    <>
      <div className="card__modal">
        <img className="close-modal" src={close} alt="close" onClick={closeModal} />
        <img className="card__image" src={urls.regular} alt={alt} />
        <div className="card__info">
          <div className="card__info-header">
            <p>{name}</p>
            <img style={{ border: `2px solid ${color}` }} src={avatar.large} alt="avatar" />
          </div>

          <ul className="card__info-list">
            <li>
              <b>Bio:</b> {bio ? bio : 'Not have bio'}
            </li>
            <li className="list-item">
              <img width={32} src={locationIcon} alt="lcoation icon" />{' '}
              <b>{location ? location : 'Not have location'}</b>
            </li>
            <li className="list-item">
              <img width={32} src={twitterIcon} alt="twitter Icon" />
              {twitter ? (
                <a href={`https://twitter.com/${twitter}`}>{<b>{twitter}</b>}</a>
              ) : (
                <b>{'Not have twitter'}</b>
              )}
            </li>
            <li className="list-item">
              <img width={32} src={instagramIcon} alt="instagram icon" />
              {instagram ? (
                <a href={`https://instagram.com/${instagram}`}>
                  <b>{instagram}</b>
                </a>
              ) : (
                <b>{'Not have instagram'}</b>
              )}
            </li>
            <li className="likes">
              <Likes likes={likes} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PhotoCardModal;