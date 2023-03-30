import React from 'react'
import { RadixDappToolkit } from '@radixdlt/radix-dapp-toolkit'
import { SaleMain, Footer } from '../components'
import { Link } from "react-router-dom";
import styles from "../style"
import { logo } from "../assets";

const rdt = RadixDappToolkit(
    {
        dAppDefinitionAddress:
            'account_tdx_22_1pz7vywgwz4fq6e4v3aeeu8huamq0ctmsmzltay07vzpqm82mp5',
        dAppName: 'XRDINU dApp',
    },
    (requestData) => {
        requestData({
            accounts: { quantifier: 'atLeast', quantity: 1 },
        }).map(({ data: { accounts } }) => {
            // set your application state
        })
    },
    {
        networkId: 34,
        onDisconnect: () => {
            // clear your application state
        },
        onInit: ({ accounts }) => {
            // set your initial application state
        },
    }
)

const Sale = () => (
    <div className="bg-primary w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <nav className="w-full flex py-6 justify-between items-center navbar">
                    <div className="bg-primary w-full">
                        <nav className="w-full flex py-6 justify-between items-center navbar">
                            <Link to="/"><img src={logo} alt="radixinu" className="w-[50px] h-[50px] rounded-2xl" /></Link>
                            <div className={`list-none sm:flex hidden justify-end items-center flex-1`}>
                                <radix-connect-button />
                            </div>
                        </nav>
                    </div>
                </nav>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <SaleMain />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    </div>


);

export default Sale