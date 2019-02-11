import React from 'react'
import CampaignSummary from './CampaignSummary'

const CampaignList = ({campaigns}) => {
  return (
    <div className="project-list section">
      { campaigns && campaigns.map(campaign => {
        return (
          <CampaignSummary campaign={campaign} key={campaign.id} />
        )
      })}  
    </div>
  )
}

export default CampaignList