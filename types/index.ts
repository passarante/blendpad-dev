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
    currency: string;
    rate?: string;
    liquidity?: number;
    lock: string;
    tabs: TabContent[];
    stats: StatsTabType[];
    updates?: UpdatesTabType[];
    launched?: LaunchedType
    address: string;
    network: string;

}



type TabContent = AboutTabType | SaleTabType | TokenomicsTabType | LocksTabType | TeamTabType;


export type AboutTabType = {
    id: number;
    name: string;
    content: string;
    ytVideo: string
}

export type SaleTabType = {
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
    unusedTokens?: string;
    presaleStartTime: string;
    presaleEndTime: string;
    liquidityPercent: string;
    tokensForLiquidity?: number;
    liquidityUnlockTime?: string;
    tokensReleasedOnLaunch?: string;
    vestingDelay?: number;
    VestingTimePeriod?: number;
    vestingReleasePerTimePeriod?: string;
}




export type TokenomicsTabType = {
    id: number;
    name: string;
    presale: number;
    unlocked: number;
    liquidity?: number;
    burnt?: number;
    locked?: number;
    score?: string;
    initialMarketCap: number;
    circulatingMarketCap: number;
    fdvMarketCap: number;
}

export type LocksTabType = {
    id: number;
    name: string;
    tokenLocks: number;
    liquidityLocks: number;
    tokenSymbol: string;
}

export type TeamTabType = {
    id: number;
    name: string;
    members: TeamMemberType[];
}

type TeamMemberType = {
    name: string;
    title: string;
    twitter?: string;
    avatar?: string;
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

type LaunchedType = {
    tokenAddress: string;
    listingDex: string;
    listingDexImage: string;
    chart: string;
    chartImage: string;
    mintable: boolean,
    freezable: boolean,
}