import React from 'react';
import Input from '../../Input';
import './index.css';

const MemeGenerator = ({ meme = {}, onChangeText }) => {
    return (
        <div className='MemeGeneratorContainer'>
            <div className='FlexCenter InputContainer'>
                <Input
                    placeHolder='Top Text'
                    name='topText'
                    value={meme.toptext}
                    onChange={onChangeText}
                />
                <Input
                    placeHolder='Bottom Text'
                    name='bottomText'
                    value={meme.bottomtext}
                    onChange={onChangeText}
                />
            </div>
            {
                meme.image && (
                    <div className='FinalMemeContainer'>
                        <img
                            src={meme.image}
                            alt={meme.image}
                            className="SelectedImage"
                            key={meme.image}
                        />
                        <h1 className='GenericText TopText'>{meme.topText}</h1>
                        <h1 className='GenericText BottomText'>{meme.bottomText}</h1>
                    </div>
                )
            }
        </div>
    );
}

export default MemeGenerator;