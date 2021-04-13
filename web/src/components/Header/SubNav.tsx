import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';

export type SubNavProps = {
  /**
   * nav elements
   */
  tabs: Array<{ id: string; label: string; to: string }>;
};

const a11yProps = (index: number) => ({
  id: `wrapped-tab-${index}`,
  'aria-controls': `wrapped-tabpanel-${index}`,
});

const SubNav = ({ tabs }: SubNavProps): ReactElement => {
  const { pathname } = useLocation();
  const value = tabs.indexOf(tabs.find((t) => t.to === pathname));

  return (
    <Tabs
      aria-label="sub nav tabs"
      TabIndicatorProps={{ style: { background: '#fff' } }}
      value={value > -1 ? value : false}>
      {tabs.map((tab, index) => (
        <Tab component={Link} key={tab.id} {...a11yProps(index)} {...tab} />
      ))}
    </Tabs>
  );
};

export default SubNav;
