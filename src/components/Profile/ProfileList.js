import PropTypes from 'prop-types';
import Profile from './Profile';

export default function ProfileList({ items }) {
  return items.map((item, index) => (
    <div key={index}>
      <Profile
        username={item.username}
        tag={item.tag}
        location={item.location}
        avatar={item.avatar}
        stats={item.stats}
        followers={item.stats.followers}
        views={item.stats.views}
        likes={item.stats.likes}
      />
    </div>
  ));
}

ProfileList.propTypes = {
  items: PropTypes.array.isRequired,
};

