import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { Subheading } from "../components/subheading"
import { useNavigate } from "react-router-dom"

export const Home=()=>{
    const navigate=useNavigate()
    return <div className="bg-red-500 display-flex justify-center">
        <div className=" flex justify-between text-neutral-50 text-xl p-3 font-bold">
            <div>Blogger</div>
            <Button onClick={()=>{
                navigate('/signup')
            }} placeholder={"Signup"}/>
        </div>
        <div className="flex justify-center m-5 text-neutral-50">
        <Heading label={"Publish your passions, your way"}/>
        </div>
        <div className="flex justify-center m-2 text-neutral-50">
        <Subheading label={" Create a unique blog easily"}/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center">
            <Button onClick={()=>{
                navigate('/blog')
            }} placeholder={"CREATE YOUR BLOG"}/>
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center " >
        <img className="w-1/3 h-1/3" src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjC8IO7HZVGjXqEfGjcPiVmR3i9QDeCtRGAPFnErcn-wvhboI5w9PQrjtbsR79X5rUIEx56Gl3-v78Ol1q2wGkLUX5I6ffdGgvNEBSHy4cvmWEGQcp2qgvfL6HgPE9XefS1n8GYQEhj5uuunrqpDZCZkNk6Wfo5K6Q/d" class="theme--layer theme--layer-1 picture" alt="Picture" sizes="(min-width: 37.5rem) 17vw, 55vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiql1tMJfmRQyQmSBL7nljps6Yor6PGEqK4JpQKdyf8Un_021SSnSnb0nS1TZQhKH0py3BHW0Ip46a4PGRrPouHveP5q0gZ0qBGxSLUQKCEOD-aDghjBHRuzA69mhmHCWMLyHtr_R_T56jI6cWJ4_qL9M-yITIHCHY/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEg-0VDPg92ChXc7a40Xx6qXPloY3nZDPfSdZluDFRaB475aCVqSXRU5wajnxKFUoFnBWUlaeof6XcIhF-EzbADi4gZU25ljpTvatd6-9s9DnTjX0Ohi7aPeWTi3pVazwnm5AJhOU3IkOAPDN7ksMTy4swoz2VbV694/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiIFwFyHaoDpEWR8MXxLlAr-iJHbwnQwMOzzft___1fUvQZTzbsbQHyE95xXXn5qw7jvzVhL6Cz8enTqvbAoB7nGem5NCziNWuXTOb409XSH_qtMMcdodSFUJ1Mv-evbVXGc3Xd5EknJdsMeUyzhyI6TCVgVzKilHQ/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgDuQKIaFQ6tHmPe2G3gp_D8G9lHQMj9Ak5Qti-9oP4ZuCoMXzMfAd012YrJuGwHG-CN6zmu_P3jmke5speMHkuF-rD9qrdWXFsIMx7W_-_mzpWgeKcuJVTNza65OvwmXXub8pFxZy729MDliAIsvcFP_YVxAqGACw/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEi2ZE1nRvcZFBhVs-GYoLTUBTLW368Lw-z35RMNFWZhRUswkqDBEv821XpcSx6hw9trPfie7E6MGapQklDO2i9q6qOl4R1jOG3zmOrR_TAN7rWsaTTHwhngQVWf6cnP8EwnFKikir4ItInIrg5xfrvI7H8W-aPqo88/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEj3OivueXIZCx2ovyPCXYW6BYi1OoE28j_r4KVCBkjsjZ7ncrk--iPvimnyOgfCOr6cKOKEpDEHXMYaYKi4n0sN74Ey5yOCK-dH2tb5KUjC2h1xwexjWi3DqZOVhHTMaRYCIRHB08c-kSzy4aIwWAQm4vjFP3hKsBg/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEghOZH01xb31Afa3i74T2lrdCH2CWjI9MZXXmgbJ6BXacZYjWpgsSKCcbvhHdZuR0QI_A6duLZYddHY-wzdESrlNmEhw4vMSK32PZWO-NHfO3qOQ4ITCBEjUUo80tSek28PSVzVnjVBFC3QDgtb56Txl06MvVuA2o4/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEizJ07fCl_oD6k061QYjNv0Kdo3IS8WCeRf_EJQIvAO8szI7vpcY30gfICsk7XD4XuesixGR38RnYc-RTEDdsFNGlfYNx0LTIkYLwyjpI18MMK45Voj9fMtSVRY6T-oTx5BRFplO7IDlkp94Xu6eiH3xFRaLm5837s/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEg0iX7H-zizWpQ15FQ8Cr_evLHw0_6zEOgCuwuFHTiufmI7uDwyQv4rzsBZUXv5zO9RIH9TqFs-KZ0cZVI53c33cjSmCYLFDqKsgR6X5uwmgZ-nOmo6mfRQTXyCq_irLEMSMzOJg1D28cNGHIKn1RRgWMs8KMnXFaM/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhcXMTa1UYGxd0MXPDVaOTpg1E2nWdVgFWDnAdtdEtLd5eLAAhY-TBNNQnSSzUj8eLlvBaEbwsS_szT4HK7NitXUu6F94urYNIJGbhpNqcX3GwJ8mrd5tW0l84krmXYqJIEwASMrnsbq3eR7rziuqza5ePmYwmo4lM/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEj2uSLtUoJ_oSHfLGG-5bKppUcgvzN-1HC-gkmPFecSXD714_4-GVNSXgSeFJpF8D80Sl7KLJNPM3Hz937wrz7AWStxLQBMTej0HzGE1t3BELWUvJWYgEVkvKUT_vTJNiL_VqK7ffs8aYm2ksJoyCJNpbvhrXWZD-c/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgdYQrZrS5ueyw4uEVN_AenTXfBSf9CfFnBby5HTJhrEkcOpJLtYbUa_Cq7rcFe5Ph88LEWYf0Epk8tIGd_vQKBvaf-IBftRxZOEjs6kr_GN2yajLNsWk6avnmgonrPoXue3S3FY2y9chnoHpvu5aQlqeCWhCHfLtM/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjC8IO7HZVGjXqEfGjcPiVmR3i9QDeCtRGAPFnErcn-wvhboI5w9PQrjtbsR79X5rUIEx56Gl3-v78Ol1q2wGkLUX5I6ffdGgvNEBSHy4cvmWEGQcp2qgvfL6HgPE9XefS1n8GYQEhj5uuunrqpDZCZkNk6Wfo5K6Q/d 1600w"></img>
            </div>
            <br></br>
            <br></br>
            <br></br>

        <div className="flex justify-end bg-orange-500">
            <div className="font-serif text-5xl font-thin text-neutral-50 p-7">Choose the perfect <br/>design
            <div className="font-serif text-xl font-extralight text-neutral-50 pt-5">Create a beautiful blog that fits your style.
                 Choose from a selection of easy-to-use templates
                 all with flexible layouts and hundreds of background images
                 or design something new.</div>
                 </div>
        <img  src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjWYbuVthiY5an7QyeqyV5HWK1yFQm7ddx_h8bkvprLM7lIlTsPdc1pq6FA7TSVoKZvoOgUEW8js1_5XFvwSlTeZu_S74AFya7utE2hF-agKMvQDC3YVi__DEcyeLbRrAmz25hCG0fwr7d1Nawg2nBMEK4NBgi3sPTmrl8/d" class="background--layer design1" alt="Preview template" sizes="(min-width: 37.5rem) 59vw, 80vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEg6dgmre9aMucH3aNqRR1cXde5LIuXk3W3I63yAVF8rYZpIAWysmcHBdjdiF-rtsJFxXWt5KwvbzbChw1nmYok3cj-CWJVjXzvFfjg-y4_u0xxpeeZ4aLSu5HU1OMrkDuymNPQKSyTX4Wu5S3sMt5SDfd5So7M8TIL3dCM/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjDz-VyzmNF1TNrt52qHTt0rC-bg9ezq8ui-vckCm6s6WkZolzJV29eVQnOG3pHPTyMJ52cygltyGj9YtHJUcN6APdMmc9qrEwtscssggXL9ZwOeiZkQrB62nfZ2atUl3a7yMq32W09N_MMoMIJc_WFDXebJ_bCkywMo0A/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiLIKPpXJ5Dc0a_h1vIRb7I8H8uRQueTwPJRgsg16UzrBiApMaZ6pdj4cHtrZ-R0qqpxTGWOw_tstnNu2nCT0E1k4Jxz-sSAfvaiMl4M5WQOqI1zv0koX2mw1IGdxcnLwUVmHwURmIM-ZfjKUIBzpEuKiP4FVZRdl4tEUE/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiVhZP4raFlg_heiM56aFv0TbSK1N4dj0A-Tn5zq1ThP4fM1b01mTx6LcXEvTKme0h7Hmnpp2eEf-9RDMtmVQ5K-j3bh9AikzeZdmknp3026QWnKEZkAKnkpz95t--UMUMTsUbOFGXIgXQ527UPxyck1WIyxJkGGdhL0rw/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhjeJmu4SU8ych3PI4pd8OPvQc-nBwH8t8phMzuER5faKpKQiPIXLK881qA3aovnWW6F_2pxlF48oKD226YdoQqvzGEmCIMKRb73MadSvfs8gE94Dv9YyelrW7fLlVxtq8po2sd1gl9_ZxYFX6iiYNgeOXT7pRRi3wLqZs/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhIsk7HjsVpGXL-cjSHEdynFYEpN8bDtDftK_AgKQ8pwNkXr9rwXKL0HcGjWlxQS99AB_RCjYp_a1TPUhMkCcyTh6P6T1kBPRx-QP6Y_sjKpJn3IXHCDbYw-LgzLtfeZcmIE-wiyrpAu7KhRtmCp_6YkLRrXQmvx3zJBCU/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhDWrObRGDUAj2GbrmO8hupMmLeqJR-5fxnEyT-UhgG44hnxOw1hrNuA23SgDAbJNHXLcORKph4mQ0mSrgNnCY478MZi3gLo9dTH9aO0hQeepZ7d6nfHLmEUwOI4iq-rGWsmrscyXim2OXSLBb7kk0_b_WedCOjfT2n_dk/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjxZ5A2FlQ57FSTlqoS0Qa7Z8L_hcfDuvsQNVjuw6M9STCWrwpdyU4IWKZO_yFLfA-2kpnlB975Ya6Lmir5row_-54rkywxecjyErjTdDJPD7-55e5xFaFeB9PfSwIDaOdQP9v5QUerfLBaJjmiKV57x5CZEGldLg9Y3JE/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEitaCDL4xXTWt_B-JhCuYu85VyDFBFfSYvmdbMQglTnwjGJMAoeAVtdy42o15Ju-7NEczYCp3psXz0ScNf7s3WUFKetUOVjqTLPCt5BrVZEDIsgQGfzc3D29sICpEpMJes_wYWKVuiBOAhQA6X-rZ8XzrBv4iatinZsJcw/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhMb8VfHaBQc75VuVWTGhAFkvwGOuwukzTe2ywmWRih973A6IAs351vBCp-9yWDo_S-TFltt5GvJwpdfekk9fR7tvj7WnbDEx_9WD0rzabyqCxJBId1h6IHKoe_RCDr6Ya7qR339lVrNdIJat1Gy7lsHbL-emPbYhpLiRE/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgUBB5DXNlnFzdymjib0jVusprDx6SfFiwyrJ39T2ityg6G4u4mnREN21R7PzQPxJL-90vtRjbTw71h6P06dEbBMzVYQBHysdtWcib9UEwS5oQcPGdPuhbdB039V93PX-JvPG0HbOTFkTd_0Qv_yLgVvxi3VKMLQ0aZU5o/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiKQBhcVtj--7thQ1JzOgtxMAjmy2cg09uEwEj62zYpgTwvLBCJSAvhmxuvL1DZrtOQ9409UIX0dyxPEY3ofOYElLwjGkEiLoVJk7tZfb-in_OymeFMdLREF0TETdMIKQBd6_9DuUGUnP-Nn28MNUwum8PJ_AdDwJy7Ook/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjWYbuVthiY5an7QyeqyV5HWK1yFQm7ddx_h8bkvprLM7lIlTsPdc1pq6FA7TSVoKZvoOgUEW8js1_5XFvwSlTeZu_S74AFya7utE2hF-agKMvQDC3YVi__DEcyeLbRrAmz25hCG0fwr7d1Nawg2nBMEK4NBgi3sPTmrl8/d 1600w"></img>
    </div>
    <div className="flex justify-end bg-red-500">
        <div className="font-serif text-5xl font-thin text-neutral-50 p-7">
        Get a domain
        
        <div className="font-serif text-xl font-extralight text-neutral-50 pt-5">
        Give your blog the perfect home. Get a blogspot.com domain or buy a custom domain with just a few clicks.
        </div>
        </div>
        <img src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhzSgJ_pGDS1Uhc5cEIr1tWnJVpoG1Jkdj-HNcCKxSSnrj6sw0NTiFpWzEtKhReS56Skliv2v9JD4zcDLKUmfKh1iyi477P4mrF2MOLzT49zxgrNOUpExCCg9H8sNiMnYectd8qO_cnH9E_qA4wPo396B3rwbBJAcZ-kZN8gws/d" class="background--layer lettergroup1" alt="Letter group" sizes="(min-width: 37.5rem) 65vw, 135vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiY22c2v_f5bE0QMmyao8HhTLkX5pYJXZfNOOdNRyHN4pPNXg7CEcUGKOCmLs0jMqJAc65NsF6H7V964PasumiHXLgJOnSpwiqDVD5RphixRfjDqmme9Wcgoi8EBFSokNxfBgGQkpXNpLwMgpcWieb8jQVqzMbh70IQP1YIfSA/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEh_N5ykKwuDdmIukSwxgaS17uRlRWths4XuSQRlu7oMkhT5NfpmtDgnLa70_JT7mB2RiomrEJMtcUzoDLv_A79D6o6-wny5E2-gNjEoVmyV0jYB7_cGzsYvRpMVdwHNdH3XnVfOudcRW05cdfeHLDk3dvIV2FtztfqjndVceNA/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjbAZgf_H4JvLhPwAVf0l85eKKZr4_mvAJ4KCh2BxvHN5BZaRJpTz5silGFsi7oBXq5Tn3gheIzLWWnsh95f-vgepLJAsHNFapx-m90v_4G8WN7_7s2Cqir3T938SVHdobRusF7Nv9LewOtMPHE32OucadRg_0tr6i4O-v4vQY/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgYZpdhC5sqDeJmCktbQYtagpIqwg_zWceOFRN6SoZdcnoxLi0bHoUTPKCwsVVeWx_9fHiSA9SeA4A09kXRzI1X8VaISRzaQmCcV6SyOCSzzDtY2Yt2lEi0TOyZYCH-ccYnz3CRljCcBpaS9Pb2LhRWYRrhFnMw80KE2mDkRls/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgwJGR2KMgpGxzCBDCITnMXzKqCP7bg4mgetHhYy-dK-JQkQb7w5m3_i7hhOBhNU69chMOfFg4oyTyifh-JSzAjUp_GKp1lPjTy7M-lUiEtpcZDiipCmKufQ62RarjWC2xrKjM-xfUOykiA5iaeSxq7-VNhedA90GstqKktxZQ/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgzs5g1R-gWWVXHDSHyK6__3GOau1026pxkqJxSVZ9im-KflOJ-jyvzeo4ikhs_mkmTQmSDX82P_f5fDPXvmZR09BqMFvYfxjRRlBP0UBv-UL68ADiY4nfTVm9-hiH449Bn7ethc6cCUjm0CBJwIAuOOBXZCn491FY13C6Jo5M/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgUkYhK2DosUb-Br-69vHJxL17D6WgrJCFhR3quEx38rshzYN0-UniD5qLju6pHPhGA07FyyTlTwun4wwVwcMxv6FPPV6emUGrf_waGx7hKICDF1D8UCOxuqYTMNoSER91IkKBty22-mh7lPU17rULw2bhK1HHnmLiBtdvlxSs/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjadctq6R-cd-OlObYN-7phuwmP_uhmyL9WrdWfWhfhSDWu0TqDEPgL-wobbJWnbk4-7ogkhiURgJLybmQjLzEel7HLiraDGlFbtYL0Ur7Nh37iMbKhgnj6kUpMRgvUgq03jyDZeJBDuf16MOXHw7zd5YIusSX002JuPDL6K_0/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjk3aMyzgP7l2lPufVvvmvCkrV47dKfxPC2snaMM-DMyrZ-DrYkBwfGumuV2Uq2He6UfntQmDDfMn4tesTPC0Weuc9_k_CczTyhmo1PRxac7rW-cJjBn-q3vXQMvgDY_jnd0BDKs3B17K2uCNINn6OZvaWzDridgeVi9nfqx8Y/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgOSXqEVJLg7ncoUu4llpOwBmW-CmvYrBz3-NR-k-PeoiyGk2C3HTZBkuXqBifvTPbF51O3DL6VYrqKYW0R4f-oZIpMRwQq3C_qBR18pciorebC9i7L0sFqjTul3eWKl2no1CltLPidGQ8IknXOOeBWG6M4K43RuB8FJBWDzhA/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiN95JdlMnXHSW1JuQgOQWfSHWcjAaGNPapo85hyw7XHMpGy7_wNnHQWm2rYXPkjsYQHC6fxRFn0eEiLfwxxwDEUO_HdP8qiKLhgbvRu61_qTcHqEJLKkUlcduTJU986lG7gregQL9IagzzqvTw7IL3yHhx6VGoB9R5-BEUI78/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjErGv_NbwuMBPbkLLsLNX3icyuyBPDzKbTuLc5RUTu1IAFEKofeksgXKr5lopnt2Ja0VtPP3rHEzyZriv3M7AaCSXLJKiLxvdeJRwWMTsaN6YDCYVw4WATTOyfoTSMUfYfD2AQ4mIWPGEZqO6ZMYX8NaG5abY12d3NRREREDI/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhzSgJ_pGDS1Uhc5cEIr1tWnJVpoG1Jkdj-HNcCKxSSnrj6sw0NTiFpWzEtKhReS56Skliv2v9JD4zcDLKUmfKh1iyi477P4mrF2MOLzT49zxgrNOUpExCCg9H8sNiMnYectd8qO_cnH9E_qA4wPo396B3rwbBJAcZ-kZN8gws/d 1600w"></img>
    
    </div>
    <div className="flex justify-start bg-emerald-500">
        <div className="font-serif text-5xl font-thin text-neutral-50 p-7">
            Earn Money
        
        <div className="font-serif text-xl font-extralight text-neutral-50 pt-5">
        Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion
        </div>
        </div>
        <img src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjsNAfJD6N_bgvXtFLu9VjjKg6RFo1sRPcbe96LQxnqjsCpxaYyEEGdOAW8ygLBQHGGQb2pkLDdIqX29_rYafQSWWU4r58UUDsb4xJBBc1ZuLss76TkOc72mkwLe25qnKiL8667n2EcgrFskVCiuRgYC6YARvIGXA/d" class="background--layer device" alt="Device" sizes="44vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgleMWVU0HETvZDQiyCguHKTF3NMUYM6_TL10HuZE7hJwk20ycH-whzY6_78T5oIw9KLdymp-osUPtrxIcFXyAUY7CZvoNbIafj4NZCUa1EEE_4Yuo6WXhzVqzxrqTAXfXHKIHTh97_rzqc268bqmS2ljb81mLsog/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgN5bV6VN0gJPLGO3eRW_kjOtPDogfPW9WBzOObfhscd0tBNwEJZmSz-usVtgNqJMVJhZNR2HsQQaizDAnLTvWjaX5ACLFZ8Kb7g_MNUYhy7kCucQxzHdj_tCmrARvwUKcz3t4T7ogmqI5Mav6jIf--lhkYP82x7w/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjMILmLgy4SnE8X9dr0Hr9pkZD_dCeWkRPwvd9rhOiURrDspLqqJFmQeQwY9PyoFLLF387R4CWDDF0u7fEQslIg3WXthJ49CvlLNl0wZo7fvIPZdDDvNGVUG3eSJpMinssv6gscQ0VNJ2iw4xBJnJ0LAzg4Ru3CXw/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEho0dxJRqZKJBbdutRb3PJIXMxyEYornfWT16wujWBzFLAfpqE64ZMgyQLV0rAMB6P56yY-FvCVPohkWIjPD9q3wZN8iEfhzqHQP7bMXc_PXnbocA_jEqqV3JOOL_xxFfgSvwq9uPyOplhXz2p16OKYu6kR9bbEgA/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEikp2Q4jsLgZG7ShxRTF13G3m6JGXFkfnGtPS9HW4noxzgOaLQtcV-l9MatDfx1F_9H5chPrwlLZ7JxF95o5dRpJxMMCOya-yypl_LTrRxnD5u86zOrQixUqrP_6uKCwTWLraldiX43tkN67G2U91flj2d0r9NCtA/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiRFbHO84kF7vRmmcICrRN6PbS6Iv3AUfQe4hUVxSlV2_VqRz4-1LxxpgcPjQlU3Z1wSSIizH5fuoPXgBUurC50Kgp0CocxGaVe-DuMqQcRqaUFgGZPbUADYxfzql_wJxTFFENSx8upMl4_5zilD7ZpUDT9ugBOtw/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgxJ1ADp-l4uN3yohCT5yP0ZdLflC-XBXIdi5bYw-AkvKwH4KK8xy_a06ctKljLJfGWBDIRmLLqm2-bQyY-1juwU_fTvtRA5q2v7fvJFLqBYJ5GQOkkchCq46Eu4jp5zP4SIO1zBvBcOetvUU8OINiZIBPcfmUt6Q/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEh8hmo0JRSQN5mfWRzW3Eu3K9QpqKgLmBqpIoregTwp1RSrMNApyHzNWL7sIEmLGF5kHW0avF3yVDodE34Ybl1D8Zp2tf0AF1ivWKxG-2OKI-zjzFWuDvZ98_7p8vXuwH6AVtyBrywoGIuDEdJibh0DgiH1Im5ksA/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgMGyxjEHT0wJ_-6i3sxaivGXmpLTuLQhW8xOTG7n979GmhAsP82qpDhA6TjUF6lIuRti4Da9mlgzrGbBcdLFJsgGy23wkSMpGRYJ5XRjzjaL2iDGqrw90OCVB5U8hSHr5PWmPSNhk9SdJ7_WmrMVvcdHtfK4feXw/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiRP6C_AlI6Qfp9GpD_YDBfOfbTm8EbtV0Hp5ZFGJ-lYvE4Yd8WvR1ZL6VKtDoRmHXX56CPTxdD6Lq-HRuVOF_3Dgn44xMglVzg_rYC46OW3MzvbUsUqH0koN8utBlAKG7zRqkJIEbmvYMwe73M1M_bzuyxrmpeYw/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjRtYtsSE0oekGqGnometIOd-MtX53ejSBkfuSJVDHFqiPAShVGIR5gT8BQ6UgnFrLvLMZ_6kmbNXw6R1IZHwR-W210caMD-yRJJgDTUOZTUahWMF5EzWOjy9Sh55p9L9agQigEGL-2KqMswTuOX3usV_54R2ufhg/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjzM8QMlC19mRz3JL6mjJQ4IbRhf0GmvX06xTZlwV0wK3LPW5XLF1ZN4zCha9UjjRD-gLe8EFY7fvk5v6Z26Z7krQ0hubapNFNxAsgc2uNw8cwo780sLafTostXGkveqSuWKjqyWxE54DAcPsewux3_hIo4AFn2YA/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjsNAfJD6N_bgvXtFLu9VjjKg6RFo1sRPcbe96LQxnqjsCpxaYyEEGdOAW8ygLBQHGGQb2pkLDdIqX29_rYafQSWWU4r58UUDsb4xJBBc1ZuLss76TkOc72mkwLe25qnKiL8667n2EcgrFskVCiuRgYC6YARvIGXA/d 1600w"></img>
    </div>
    <div className="flex justify-start bg-slate-500">
        <div className="font-serif text-5xl font-thin text-neutral-50 p-7">
        Know your audience

        <div className="font-serif text-xl font-extralight text-neutral-50 pt-5" >
        Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look.
        </div>
        </div>
        <img src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjvujdeGbomBqWOaZ1Z9NKTu8DpmH2ZVHPjRVBOc7n12qySQZF5sPCTiCfy9rZbaSf1ILF-GjAT6prjsEvrkvWrCCKLNmpQhtVLdKy9h9GhXMGMqKg1Dr6U9KGS8E0maHiCkydZnjMxOvaxry5_R_WBn9PRUIdRTsXOKNUdxVT7/d" class="background--layer graphs" alt="Graphs" sizes="(min-width: 37.5rem) 25.7vw, 52vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEj6_dILUOtnftjLSLOE3ErRCQpROv4L-XxSnBzdqntRRc3vuP3qUVahebL7impmFVdyxVrmAMNXq0xvC0ZKa-_-0yjaJ-5bCEXhfyB2Uk7nhaS9wZlf7mttKzs6dZl7edW-b-AOW5xfWp7r_HDQnnRSzrt84bchPGLj7nBnqNRt/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgpbA042fV0ovObZMiU4ZYA6_CHvYWLjrDucTcOCcNJcDwXx0YVPfC4j1JqtKeGyzqWlxtSFEc8C25Vn742PXPVMP5838GV5Rh2Ziy2m9rkdJ6KkAE5oLvuZVXmscLn3RzsXAZl0V2SxB18n77QMHD32id1o3T50m-hI035UDrA/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgUX0Vk9cW0tXt2txKie0c0c4oI0zRhIOZDGN9rtHD_AycLClC6ycbs5ywd_iAu7HQDWCpBJtloShEJLTkIqi6AXCem5_UFMEPx-t_UXSgJ1gL_i0t_03Wi8_-Jj371SWiKjbrEt3nbCO6P_2Rf18h2pPXygNfiJJWToln7OU_D/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjVdvSjSEECIFfzlj4z2zhC42F2h5SYAMFY9czzP8vrF9AwqriDeNzMTG_sdg24kVSWYyzJewOAgsZSqYH_i8FwQQM6e5i3cr3yPo9_6Hu1NPbGdQBF68DNsD2y_dpp0Oi3YbPwTMpVGbIW3F4s2P5JVzbgPJ4G88bMXrgAEfQU/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhBZy3QkICggEUHEw9S5tOr45IwS4MD4OU-pKRF6pLcQEG40aVjP17gL_Vl2VX3diqxdX4kQe6bR0d1obtNOZnxwcp6KnadiCi4VHvxb1J-fdgknz7k3z3zAUjcuTVAhQu2EVC7yYh5c5v07X3vom2AGqEr8KtVcl3WrzF5_DSu/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiPlbXC38TEcMH2g2FgBV9UO5XO4kD1aYw1_br_M6b4UG-dySsPDCp9U7IoYbObgd27U50gYjBE1FRpQr0htrqYuYJeaets20eagQVHIIuBAtl0FnoD_zH5sx4Z0Qoll8ziee_Gw9__LY_qr8HZv_tpZVMW_FD-DgBLMMZ6Qvle/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgI9Ydi82j6fpSLN6hW2-OG6ZOWUEENG1UblHPuHI15XBLpg1vRkA4vATb36vmhSrH70za8mWST1hO0xi71TF6gwzwlEPMwuwxQCwNyjM8xiY0qAZCmN7CFZYIogIi0fgjr_tRBGJKsfET1zxyTP5X3t_eN9z_jd0uPyMoCxoKs/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjDW914EBAPitHRrvw_x8DFPK0w38om9GOxyj0Q2SLD2q1tE-kqWlQpwLzKt_rTgmw5n7ZCHiFZjhiF2k_3wweCij_3YKs-WRXDUsnw-dOIwwKhhXe08Vx7BEkXWOAiZu1JtZ1DxGMAK6buTi0w2sKByCRCVmGCz1SWHHgqFURU/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgRsWyPRiCspCYdXQCEin4ZzMmCQHCXVG3DO9hQY7ZRfwo3UNEE9s-POjyT6aXUbwlvxWaM_ua0SomuHzYij5FF0PRrrn56gOrt69fd_iWR4s91LdqbqW4daL5wLdpcw-x4IOIiejDTl_Ix6uMPhEhoETOnmTgeNqZx1Cs3VXvs/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEijeLy_4_PwwPWH6PNnT5ZDsMZtuPvwOSRTCQEdUDuqu6LgIsN9HM8UAVGjlg-63Rn_SZIJmvwyJUy5LJIj4eEaNMQ0a42OcscHp5-j7v1FV7FG2AxfgkWj4M-2Hj-FDLeHWoBpMb42LoQ1KtXCvlWUmudKMWD52IChWFrlozmG/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiSWcK-8S6pyrzWa1iaa472s6Wfdk8Tlof9l2m0c8g3OfswDnxNp0xbvQ2-269kDezEUkAggLnFuReccV7snWzxmuihiClyRIlIdiMsc77dgRqgUzlWwJX7aczbdUUzfJ-8PdSkFXLj_nLsmb1d8MG4Q5c-b7O1kQTzHfLV5Cn7/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhj4LuZQ__JSyMyyDiNM6kU3mMA3pY_o1IZBDO7s3qQDjWE4FM-fzr9WpO7ZQzZSicxrGz33d1-Uy_xw2KNcNbnlu84Yba9UI8xcxGCHhJ9TTbyxZ0iT8U1YFbwHlu7exAHR5IB_FAKX7cleU1hcvnHdCQJwmDZ1KdtcSK_kbhF/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjvujdeGbomBqWOaZ1Z9NKTu8DpmH2ZVHPjRVBOc7n12qySQZF5sPCTiCfy9rZbaSf1ILF-GjAT6prjsEvrkvWrCCKLNmpQhtVLdKy9h9GhXMGMqKg1Dr6U9KGS8E0maHiCkydZnjMxOvaxry5_R_WBn9PRUIdRTsXOKNUdxVT7/d 1600w"></img>
        <img src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiq__31yEgZLGBgHLopQRooH3t2bxVkWH5K7awU3d-GQZEKqXDtB9XovwEa3wWP5rODZzGB_hndiChBTJ0rkgcN4kQd90cb5RK62puHqGHxQQn3dNXdxtxkaPcaMfSSX0oUmR0qFWwbJ9P2scZx7tMWPW8_zwx_aNSFKvdw1JWlvw/d" class="background--layer infomap" alt="Info map" sizes="(min-width: 37.5rem) 41.8vw, 86vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEi0Fd8jbwUFb3V4w5xc04o-QnuFKprPHq7mwLii02DxCfJMRidpNj5R1fzvrCkfFP3QzHtc_XqP4RNj8dkrlpQkLAvcmj_Z4EEhPDV-8nlaJN8p1Wu_3Ep27y5vNqpSPXa9883K1KOShsZSwH7g_ZcVp8Be1YK_vm3oLQCoGs1PuA/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEh7cJfEOTHCdD7RdMfa4bMwRt3sEH68QmKighhlio7Lf_aase5244tC7dRJgfLVoK05rQ82pevmY69yxlMVgkPkZpDxXWWXP2GKvkkTN_vWA-suDprZ5FBYZXZI0yzfFE2gM1V8i4hN-D0-ubN-GzypgYG6USNCrkKHkHcP6xVJHA/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEijRn36_jFWon-gOHsLwV8GBDqUMjH-nEShtzAb_YCwFCu9A1kdqM8_3gWTTCO3CiZ11JA7lBRpcLtkxazHdT8gNydW8QoUtFMaLCKCwDVoRFtxXKUySA8xA2KYPpJ4Uu3KuN1e6dhkjMsbUNtvgx2EPHpZbvzbXg1ajoIT0x2VGg/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgTKlbrOSI0zFKwpZLYF_jbVx1UyvscJTEI7vLR3TH-ExRUR47dM2qVUvL5Os-kvtGrcNgQmRjYr_b4fyKdGdUIr4wLeryYJd1HMqgYK5SwforE9z6ddRSetqqsriVaShtlsxaETsiVf3_MlKGNQ-NpLOz8X3J3UDn3fKE0zAgo_A/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEi2vbZms8Ny0GsY9ko3X3c_mcOm5Kx-4JgPqktykHMhkuocft9aASOQaLbfVy_oWC3PnOZwPj7P9HEf3HDCKdSwV3h8c0yVNuZxn5MEVmSnpOfuIus8xwOPiiaNr4NoTPFkLC-jmyIlYTYVdRkbj8emnrBS85q2kWuHDmfPCWOmBw/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEijbe42Tq9STDDEmnWrzgMDT_THxwLxi7CGKk5YsCbU2F8JH7PevuYF-Yp2Q9iXWr3fFu29uTJrGb7a-xoGxqiSTQOkX1m9ZW8wlZ7y4Yn0EoOOG8GMEkjNXHvncmviTVkyWWw-OOJMGMgsTx1lhqKYtRrM_C2qCdmaDZ-EgEjN2g/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiq9PvpLRrVCtkLe42VPayql7-1Vwj6UsEZdJ4VX1I-oBdUTGBdBJMxxNYOLgg8ilbxkxRGGJnqzxYE_WPv6tMrG2u2YJ0vmst8TatsOmXp-UY8aQNebzYXXNujnXjmMPuMgcm8qK9UHBV5kFsxJvo1UDBHZd9WbmC8WXSMfflJdg/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEj6jqHSuT5ObSWJdANVDPc6WPG2oaQIw_FFT6GBk25OXSnctGAmur9wPuVcyho-jOeVlyYWpTwN_5hR4BrWQjFwq-eAwMIfYlCid1UNzg_6MR1gAb8NcSDUD1wqaOgZBZQnIgaTV3iujRXSVZIfC8Y6s0RNbcH6_RcwjMkJtwc9sQ/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEji8yL-mOPJfF5sfhAFD-N5r34oeH7qwXeTzgzPYo1C_UylZHAqKiMlHDKlxOeMl9Td0E1REN8H8TQFx5QhKyTHVsQffmeYR7WrNEX5AVuwP7ERJpkkZsGSNhSazy-IEyU8fYw41lTd5ht7kmm_srm913qnYhyjCwpZ-T32MzV9zw/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhy9r8vyLfwnrBV2wBe_8yh4eCCMJtO8VNiNucSp35Amu05tih3a8xYXQxRxoUkQDHdCw7nW8D31w-xBqya757bcQ7tErWAxrTj9EFSteCHgxGebiCnCAX83DBcNX67kWNZGIBWSj7OMMl1HDtYhiuajGSNS7_O4XHMhKSOufUDUw/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiz3yN0w0F38anEUPg26Nr7p373LNh49hfFa7qqAjBOYpYdCCft3V2z803_TyMAhaz99YAw8ss2Ht_MXMFBt0b3E2Qek02oBGodOnZl7f58CG3HLjWwDo5GL05go9P5GXRyZrRa64kM48BBz85tGTor2NGz7-XCV_CQv3LnhZyZ3A/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEh1YT0LVFSiiO334r1uv1FSUqLFsk_bENEW_RenA-9x1UV3bhyQV03al6e3Jea4YrNJLp58Jh_OtnhlTjQKw-vYgcF1y8zPWWLPtoycr6HWUuXzUEvd6kZ98qRZSjNf46qey6ODeCRMZrFF0NwtE1hH5bafv7aiyJ16BYd_pktYfg/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiq__31yEgZLGBgHLopQRooH3t2bxVkWH5K7awU3d-GQZEKqXDtB9XovwEa3wWP5rODZzGB_hndiChBTJ0rkgcN4kQd90cb5RK62puHqGHxQQn3dNXdxtxkaPcaMfSSX0oUmR0qFWwbJ9P2scZx7tMWPW8_zwx_aNSFKvdw1JWlvw/d 1600w"></img>
    </div>
    <div className="flex justify-start bg-yellow-500">
        <div className="font-serif text-5xl font-thin text-neutral-50 p-7">Hang onto your memories
            <div className="font-serif text-xl font-extralight text-neutral-50 pt-5">
            Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.
            </div>
        </div>
        <img  src="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjC8IO7HZVGjXqEfGjcPiVmR3i9QDeCtRGAPFnErcn-wvhboI5w9PQrjtbsR79X5rUIEx56Gl3-v78Ol1q2wGkLUX5I6ffdGgvNEBSHy4cvmWEGQcp2qgvfL6HgPE9XefS1n8GYQEhj5uuunrqpDZCZkNk6Wfo5K6Q/d" class="theme--layer theme--layer-1 picture" alt="Picture" sizes="(min-width: 37.5rem) 17vw, 55vw" srcset="//blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiql1tMJfmRQyQmSBL7nljps6Yor6PGEqK4JpQKdyf8Un_021SSnSnb0nS1TZQhKH0py3BHW0Ip46a4PGRrPouHveP5q0gZ0qBGxSLUQKCEOD-aDghjBHRuzA69mhmHCWMLyHtr_R_T56jI6cWJ4_qL9M-yITIHCHY/w32 32w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEg-0VDPg92ChXc7a40Xx6qXPloY3nZDPfSdZluDFRaB475aCVqSXRU5wajnxKFUoFnBWUlaeof6XcIhF-EzbADi4gZU25ljpTvatd6-9s9DnTjX0Ohi7aPeWTi3pVazwnm5AJhOU3IkOAPDN7ksMTy4swoz2VbV694/w48 48w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEiIFwFyHaoDpEWR8MXxLlAr-iJHbwnQwMOzzft___1fUvQZTzbsbQHyE95xXXn5qw7jvzVhL6Cz8enTqvbAoB7nGem5NCziNWuXTOb409XSH_qtMMcdodSFUJ1Mv-evbVXGc3Xd5EknJdsMeUyzhyI6TCVgVzKilHQ/w64 64w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgDuQKIaFQ6tHmPe2G3gp_D8G9lHQMj9Ak5Qti-9oP4ZuCoMXzMfAd012YrJuGwHG-CN6zmu_P3jmke5speMHkuF-rD9qrdWXFsIMx7W_-_mzpWgeKcuJVTNza65OvwmXXub8pFxZy729MDliAIsvcFP_YVxAqGACw/w96 96w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEi2ZE1nRvcZFBhVs-GYoLTUBTLW368Lw-z35RMNFWZhRUswkqDBEv821XpcSx6hw9trPfie7E6MGapQklDO2i9q6qOl4R1jOG3zmOrR_TAN7rWsaTTHwhngQVWf6cnP8EwnFKikir4ItInIrg5xfrvI7H8W-aPqo88/w128 128w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEj3OivueXIZCx2ovyPCXYW6BYi1OoE28j_r4KVCBkjsjZ7ncrk--iPvimnyOgfCOr6cKOKEpDEHXMYaYKi4n0sN74Ey5yOCK-dH2tb5KUjC2h1xwexjWi3DqZOVhHTMaRYCIRHB08c-kSzy4aIwWAQm4vjFP3hKsBg/w192 192w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEghOZH01xb31Afa3i74T2lrdCH2CWjI9MZXXmgbJ6BXacZYjWpgsSKCcbvhHdZuR0QI_A6duLZYddHY-wzdESrlNmEhw4vMSK32PZWO-NHfO3qOQ4ITCBEjUUo80tSek28PSVzVnjVBFC3QDgtb56Txl06MvVuA2o4/w256 256w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEizJ07fCl_oD6k061QYjNv0Kdo3IS8WCeRf_EJQIvAO8szI7vpcY30gfICsk7XD4XuesixGR38RnYc-RTEDdsFNGlfYNx0LTIkYLwyjpI18MMK45Voj9fMtSVRY6T-oTx5BRFplO7IDlkp94Xu6eiH3xFRaLm5837s/w384 384w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEg0iX7H-zizWpQ15FQ8Cr_evLHw0_6zEOgCuwuFHTiufmI7uDwyQv4rzsBZUXv5zO9RIH9TqFs-KZ0cZVI53c33cjSmCYLFDqKsgR6X5uwmgZ-nOmo6mfRQTXyCq_irLEMSMzOJg1D28cNGHIKn1RRgWMs8KMnXFaM/w512 512w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEhcXMTa1UYGxd0MXPDVaOTpg1E2nWdVgFWDnAdtdEtLd5eLAAhY-TBNNQnSSzUj8eLlvBaEbwsS_szT4HK7NitXUu6F94urYNIJGbhpNqcX3GwJ8mrd5tW0l84krmXYqJIEwASMrnsbq3eR7rziuqza5ePmYwmo4lM/w768 768w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEj2uSLtUoJ_oSHfLGG-5bKppUcgvzN-1HC-gkmPFecSXD714_4-GVNSXgSeFJpF8D80Sl7KLJNPM3Hz937wrz7AWStxLQBMTej0HzGE1t3BELWUvJWYgEVkvKUT_vTJNiL_VqK7ffs8aYm2ksJoyCJNpbvhrXWZD-c/w1024 1024w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEgdYQrZrS5ueyw4uEVN_AenTXfBSf9CfFnBby5HTJhrEkcOpJLtYbUa_Cq7rcFe5Ph88LEWYf0Epk8tIGd_vQKBvaf-IBftRxZOEjs6kr_GN2yajLNsWk6avnmgonrPoXue3S3FY2y9chnoHpvu5aQlqeCWhCHfLtM/w1200 1200w,
                 //blogger.googleusercontent.com/img/b/U2hvZWJveA/AVvXsEjC8IO7HZVGjXqEfGjcPiVmR3i9QDeCtRGAPFnErcn-wvhboI5w9PQrjtbsR79X5rUIEx56Gl3-v78Ol1q2wGkLUX5I6ffdGgvNEBSHy4cvmWEGQcp2qgvfL6HgPE9XefS1n8GYQEhj5uuunrqpDZCZkNk6Wfo5K6Q/d 1600w"></img>
        </div>
        <div className="flex justify-center flex-col bg-sky-500">
            
            <div className="font-serif flex justify-center text-5xl font-thin text-neutral-50 p-7">
                Join millions of others
            
                </div>
                 <div className="flex justify-center font-serif text-xl font-extralight text-neutral-50 pt-5">
                Whether sharing your expertise, breaking news,<br></br>or whatever’s on your mind, you’re in good company<br></br> on Blogger. Sign up to discover why millions of <br></br>people have published their passions here.
                </div>
            
                <div className="flex justify-center p-10">
               <Button className="flex justify-center" onClick={()=>{
                navigate('/blog')
               }} placeholder={"CREATE YOUR BLOG"}/>
               </div>
        </div>
        <div className="bg-slate-900 flex justify-between text-neutral-50 p-5">
            <div className="font-bold text-xl">Help
                <div className="font-light text-md pt-2">Help center</div>
                <div className="font-light text-md">Video Tutorials</div>
                <div className="font-light text-md">Help Form</div>
            </div>
            <div className="font-bold text-xl">Community
                <div className="font-light text-md pt-2">Blogger Buzz</div>
            </div>
            <div className="font-bold text-xl">Developers
                <div className="font-light text-md pt-2">Blogger API</div>
                <div className="font-light text-md pt-2">Developer Form</div>
            </div>
        </div>
        <div className="font-serif text-sm p-3 justify-center flex font-thin text-neutral-50 bg-slate-500">COPYRIGHT @2024 Blogger.inc</div>
            
        
    </div>
    
}