import React, { Component } from 'react';
import TabsContent from './TabsContent';
import s from './Tabs.module.css';

export default class Tabs extends Component {
  state = {
    activeTab: 0,
  };

  handleActiveTab = idx => {
    this.setState({ activeTab: idx });
  };
  render() {
    const { activeTab } = this.state;
    const { items } = this.props;
    const { content, title } = items[activeTab].content;

    return (
      <div className={s.container}>
        <div className={s.actions}>
          {items.map((item, idx) => (
            <button
              className={idx === activeTab ? s.active : s.button}
              key={item.label}
              onClick={() => {
                this.handleActiveTab(idx);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <TabsContent content={content} title={title} />
      </div>
    );
  }
}
