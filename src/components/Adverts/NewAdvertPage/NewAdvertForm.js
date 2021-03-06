import React from 'react';
import T from 'prop-types';
import { InputFile, GoBackButton } from '../../shared';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Radio,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SelectTags from '../SelectTags';
import { useTranslation } from 'react-i18next';

import '../NewAndEditAdvert.css';


function NewAdvertForm({ onSubmit }) {
  const [t] = useTranslation('global');
  const [advert, setAdvert] = React.useState({
    name: '',
    desc: '',
    price: 0,
    transaction: '',
    tags: [],
  });

  const { name, desc, price, transaction, tags } = advert;

  

  const handleChange = (event) => {
    setAdvert((oldAdvert) => ({
      ...oldAdvert,
      [event.target.name]:
        event.target.type === 'checked'
          ? event.target.checked
          : event.target.value,
    }));
  };

  const [image, setImage] = React.useState('');

   const handleChangeImage = (event) => {
     if (event.target.files[0]) {
       setImage(event.target.files[0]);
     } else {
       setImage([]);
     }
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();

    let newAdvert = new FormData();
    newAdvert.append('name', advert.name.replace(/(<([^>]+)>)/gi, ""));
    newAdvert.append('desc', advert.desc);
    newAdvert.append('price', advert.price);
    newAdvert.append('transaction', advert.transaction);
    advert.tags.forEach((tag) => newAdvert.append('tags[]', tag));
    if (image) {
      newAdvert.append('image', image);
    }

    onSubmit(newAdvert);
  };

  return (
    <Grid>
      <Paper
        elevation={10}
        className="container_paper"
      >
        <form onSubmit={handleSubmit}>
            <Grid align="center">
              <Avatar style={{ backgroundColor: '#62aae6f4' }}>
                <AddIcon />
              </Avatar>
              <h2>{t('adverts.Create new advert')}</h2>
            </Grid>
            <p>{t('adverts.Advert Name')}*</p>
            <TextField
              placeholder={t('adverts.Enter product name')}
              fullWidth
              required
              name="name"
              value={name}
              onChange={handleChange}
              autoFocus={true}
            
            />
            <p>{t('adverts.Description')}*</p>
            <textarea 
              placeholder={t('adverts.Enter description')}
              name="desc"
              value={desc}
              onChange={handleChange}
              required
            />
            <div id="price_buy">
                <section>
                  <p>{t('adverts.price')}*</p>
                  <TextField
                    placeholder={t('adverts.Enter price')}
                    required
                    type="number"
                    name="price"
                    variant="outlined"
                    value={price}
                    onChange={handleChange}
                  
                  />
                </section>
                <section id="transaction">
                  <p>{t('adverts.Transaction Type')}*</p>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="transaction"
                      name="transaction"
                      required
                      value={transaction}
                      onChange={handleChange}
                      row
                      >
                      <FormControlLabel
                        value="sale"
                        control={<Radio />}
                        label={t('adverts.Sell')}
                        />
                      <FormControlLabel
                        value="wanted"
                        control={<Radio />}
                        label={t('adverts.Wanted')}
                        />
                    </RadioGroup>
                  </FormControl>
                </section>
            </div>
            <p>{t('adverts.Select one or more tags')}*</p>
            <section className="tags_advert">
              <SelectTags
                multiple
                name="tags"
                value={tags}
                onChange={handleChange}
              />

            </section>
            <p>{t('adverts.Select image')}</p>
            <div id="input_file">
              <InputFile 
                placeholder={t('adverts.Select image')}
                name="image"
                onChange={handleChangeImage}
                
              />
              <input
                type="submit"
                className="new_advert_button"
                value={t('adverts.Created Advert')}
                disabled={!name || !transaction || !price || tags.length === 0}
              />
            </div>
        </form>
              <GoBackButton
                styleclassName={'neworedit'}
              >
                {t('adverts.Cancel')}
              </GoBackButton>
      </Paper>
    </Grid>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
