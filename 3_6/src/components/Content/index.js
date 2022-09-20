import React, { useEffect, useState } from 'react';
import httpClient from '../../utilities/AxiosClient';
import LoadingCircle from '../LoadingCircle';
import ImageList from './ImageList';
import './index.css';
import MemeGenerator from './MemeGenerator';

const Content = () => {
    const [loading, setLoading] = useState(true);
    const [imageList, setImageList] = useState([]);
    const [meme, setMeme] = useState({
        bottomText: "",
        topText: "",
        image: "",
    });

    const onChangeText = ({ target }) => {
        const { name, value } = target;
        setMeme({
            ...meme,
            [name]: value
        })
    }

    const onChangeImage = (newSource = "") => {
        setMeme({
            ...meme,
            image: newSource
        })
    }

    useEffect(() => {
        httpClient.get('https://api.imgflip.com/get_memes').then(({ data: { data } }) => {
            if (data.memes) {
                setImageList(data.memes.map(meme=>meme.url));
            }
        }).catch(err => {
            console.log('error : ', err);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    return (
        <div className="FlexCenter Content">
            {
                loading ? (
                    <LoadingCircle />
                ) : (
                    <>
                        <ImageList
                            imageList={imageList}
                            onChangeImage={onChangeImage}
                        />
                        <MemeGenerator
                            meme={meme}
                            onChangeText={onChangeText}
                        />
                    </>
                )
            }
        </div>
    );
}

export default Content;