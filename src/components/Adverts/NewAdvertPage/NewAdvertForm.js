import React from 'react';
import T from 'prop-types';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Radio,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormLabel, FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SelectTags from '../SelectTags';
import { useTranslation } from 'react-i18next';

function NewAdvertForm({ onSubmit }) {
  const [t, i18n] = useTranslation('global');
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
    newAdvert.append('name', advert.name);
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
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={10}
          style={{
            padding: '30px',
            height: '500px',
            margin: '50px auto',
            width: '500px',
          }}
        >
          <Grid align="center">
            <Avatar style={{ backgroundColor: '#1dba849e' }}>
              <AddIcon />
            </Avatar>
            <h2>{t('adverts.Create new advert')}</h2>
          </Grid>
          <TextField
            label={t('adverts.Advert Name')}
            placeholder={t('adverts.Enter product name')}
            fullWidth
            required
            name="name"
            value={name}
            onChange={handleChange}
            autoFocus={true}
          />
          <TextField
            label={t('adverts.price')}
            placeholder={t('adverts.Enter price')}
            fullWidth
            required
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            autoFocus={true}
          />
          <TextField
            label={t('adverts.Image')}
            placeholder={t('adverts.Select image')}
            type="file"
            fullWidth
            name="image"
            onChange={handleChangeImage}
          />
          <TextField
            label={t('adverts.Descrption')}
            placeholder={t('adverts.Enter description')}
            type="text"
            fullWidth
            required
            name="desc"
            value={desc}
            onChange={handleChange}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">{t('adverts.Transaction')}</FormLabel>
            <RadioGroup
              aria-label="transaction"
              name="transaction"
              value={transaction}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="sell"
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
          <SelectTags
            multiple
            name="tags"
            value={tags}
            onChange={handleChange}
          />
          <Button
            type="submit"
            style={{ margin: '30px 0' }}
            color="primary"
            fullWidth
            variant="contained"
            disabled={!name || !transaction || !price || tags.length === 0}
          >
            {t('adverts.Created Advert')}
          </Button>
        </Paper>
      </form>
    </Grid>
  );
}

NewAdvertForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
