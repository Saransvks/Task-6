// class - uberprice


class UberPrice{
    constructor(){
        this.basefare = 70;
        this.costperminute = 20;
        this.rideinpermin = 1;
        this.bookingfare = 60;
    }
    calculateprice(ridedistance,timeinminutes)
    {
        const distance = this.costperminute * ridedistance;
        const timecost = this.rideinpermin * timeinminutes;

        const total = this.basefare + distance + timecost + this.bookingfare;

        return total;
    }
}
