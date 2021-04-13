import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';

export type SubNavProps = {
  /**
   * nav elements
   */
  tabs: Array<{ id: string; label: string; to: string }>;
};

const a11yProps = (index: any) => ({
  id: `wrapped-tab-${index}`,
  'aria-controls': `wrapped-tabpanel-${index}`,
});

const SubNav = ({ tabs }: SubNavProps): ReactElement => {
  const { pathname } = useLocation();

  return (
    <Tabs
      aria-label="sub nav tabs"
      TabIndicatorProps={{ style: { background: '#fff' } }}
      value={tabs.indexOf(tabs.find((t) => t.to === pathname))}>
      {tabs.map((tab, index) => (
        <Tab component={Link} {...a11yProps(index)} {...tab} />
      ))}
    </Tabs>
  );
};

export default SubNav;
