import { LucideIcon } from "lucide-react";

export type SidebarLink = {
    title: string;
    icon: LucideIcon;
    href: string;
}




export type PresaleType = {
    id: number;
    banner: string;
    logo: string;
    typeImage: string;
    networkLogo: string;
    title: string;
    type: string;
    maxBuy: number;
    status: string;
    progress: number;
    tags: string[];
    target: number;
    raised: number;
    softcap: number;
    hardcap: string;
    rate: string;
    lock: string;
    tabs: TabContent[];
    stats: StatsTabType[];
    updates: UpdatesTabType[];

}



type TabContent = AboutTabType | SaleTabType | TokenomicsTabType | LocksTabType | TeamTabType;


type AboutTabType = {
    id: number;
    name: string;
    content: string;
    ytVideo: string
}

type SaleTabType = {
    id: number;
    name: string;
    network: string;
    presaleAddress: string;
    tokenName: string;
    tokenSymbol: string;
    totalSupply: number;
    tokensForPresale: number;
    softcap: number;
    hardcap: number;
    unusedTokens: string;
    presaleStartTime: string;
    presaleEndTime: string;
    liquidityPercent: string;
    tokensReleasedOnLaunch: string;
    vestingDelay: number;
    VestingTimePeriod: number;
    vestingReleasePerTimePeriod: string;
}

type TokenomicsTabType = {
    id: number;
    name: string;
    presale: number;
    unlocked: number;
    initialMarketCap: number;
    circulatingMarketCap: number;
    fdvMarketCap: number;
}

type LocksTabType = {
    id: number;
    name: string;
    tokenLocks: number;
    liquidityLocks: number;
}

type TeamTabType = {
    id: number;
    name: string;
    members: TeamMemberType[];
}

type TeamMemberType = {
    name: string;
    title: string;
    twitter: string;
}

type StatsTabType = {
    status: string;
    minimumBuy: string;
    maxiumumBuy: string;
    presaleRate: string;
    listingRate: string;
    totalContributors: number;
    avgContribution: number;
    myContribution: number;
    myReservedTokens: number;

    tokenAddress: string;
}

type UpdatesTabType = {
    id: number;
    dateFrom: string;
    content: string;
}