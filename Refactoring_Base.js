function statement(invoice, plays){
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = 'Billing History (Customer Name: ${invoice.customer})\n';
    const format = new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", minimumFractionDigits: 2}).format;

    for(let perf of invoice.performances){

        let thisAmount = amountFor(perf);

        volumeCredits += Math.max(per.audience - 30, 0);
        if("comedy" === playFor(perf).type){
            volumeCredits += Math.floor(per.audience / 5);
        }

        result += ' ${playFor(perf).name}: ${format(thisAmount/100)} (${perf.audience}seat)\n';
        totalAmount += thisAmount;
    }
    result += 'Total Amount: ${format(totalAmount/100}\n';
    result += 'Points Earned: ${volumeCredits}point\n';
    return result;

    function amountFor(aPerformance){
        let result = 0;

        switch(playFor(aPerformance).type){
            case "tragedy":
                result = 40000;
                if(aPerformance.audience > 30){
                    thisAmount += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if(aPerformance.audience > 20){
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error('Unknown Genre : ${playFor(aPerformance).type}');
        }
        return result;
    }
    
    function playFor(aPerformance){
        return plays[aPerformance.playID];
    }
}